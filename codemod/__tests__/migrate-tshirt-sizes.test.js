import { describe, it, expect } from 'vitest';
import migrateTshirtSizes from '../migrate-tshirt-sizes';

// Helper to run codemod on code string
function runCodemod(input, options = { quote: 'single' }) {
  const api = {
    jscodeshift: require('jscodeshift'),
  };
  const file = { source: input };
  return migrateTshirtSizes(file, api, options);
}

describe('migrate-tshirt-sizes codemod', () => {
  it('transforms variable assignment', () => {
    const input = "const pad = 'small';";
    const output = runCodemod(input);
    expect(output).toContain("const pad = 'xsmall';");
  });

  it('transforms pad with conditional object', () => {
    const input =
      "<PageContent pad={bestPractice ? { bottom: 'large' } : undefined}></PageContent>";
    const output = runCodemod(input);
    expect(output).toContain("bottom: 'xlarge'");
  });

  it('transforms size prop in Chart', () => {
    const input = '<Chart size="small" />';
    const output = runCodemod(input);
    expect(output).toContain("size='xsmall'");
  });

  it('transforms thickness prop in Meter', () => {
    const input = '<Meter thickness="small" />';
    const output = runCodemod(input);
    expect(output).toContain("thickness='xsmall'");
  });

  it('transforms object in nameProps', () => {
    const input =
      "<NameValueList nameProps={{ width: 'xsmall', align: 'end' }}/>";
    const output = runCodemod(input);
    expect(output).toContain("width: '3xsmall'");
  });

  it('transforms array in nameProps', () => {
    const input =
      "<NameValueList nameProps={{ width: ['xxsmall', 'xsmall'] }}/>";
    const output = runCodemod(input);
    expect(output).toContain("width: ['5xsmall', '3xsmall']");
  });

  it('transforms object in valueProps', () => {
    const input =
      "<NameValueList valueProps={{ width: 'xsmall', align: 'end' }}/>";
    const output = runCodemod(input);
    expect(output).toContain("width: '3xsmall'");
  });

  it('transforms array in value Props', () => {
    const input =
      "<NameValueList valueProps={{ width: ['xxsmall', 'medium'] }}/>";
    const output = runCodemod(input);
    expect(output).toContain("width: ['5xsmall', 'medium']");
  });

  it('transforms rows array', () => {
    const input = "const rows = ['xsmall', 'small'];";
    const output = runCodemod(input);
    expect(output).toContain("['3xsmall', 'xsmall']");
  });

  it('transforms nested columns array', () => {
    const input =
      "const columns = [['xxsmall', 'xsmall'], ['xsmall', 'small'], 'xsmall'];";
    const output = runCodemod(input);
    expect(output).toContain(
      "[['5xsmall', '3xsmall'], ['3xsmall', 'xsmall'], '3xsmall']",
    );
  });

  it('transforms columns array', () => {
    const input = "const columns = ['small', 'xsmall', 'xsmall']";
    const output = runCodemod(input);
    expect(output).toContain("['xsmall', '3xsmall', '3xsmall']");
  });

  it('transforms columns string', () => {
    const input = "const columns = 'xsmall';";
    const output = runCodemod(input);
    expect(output).toContain("const columns = '3xsmall';");
  });

  it('transforms margin with conditional', () => {
    const input = "<Box margin={{ top: level === 3 ? 'medium' : 'large' }}/>";
    const output = runCodemod(input);
    expect(output).toContain("top: level === 3 ? 'medium' : 'xlarge'");
  });

  it('transforms pad with array in conditional', () => {
    const input =
      "<Box pad={['xsmall', 'small'].includes(size) ? pad.small : pad}/>";
    const output = runCodemod(input);
    expect(output).toContain("['3xsmall', 'xsmall'].includes(size)");
  });

  it('transforms nested pad object', () => {
    const input = `const UsageExample = ({
                children,
                label,
                themeMode,
                pad = {
                    horizontal: 'large',
                    vertical: 'small',
                    small: { horizontal: 'xxsmall', vertical: 'xsmall' }
                },
                ...rest
                }) => {return <Box></Box>}`;
    const output = runCodemod(input);
    expect(output).toContain("horizontal: 'xlarge'");
    expect(output).toContain("vertical: 'xsmall'");
    expect(output).toContain(
      "small: { horizontal: '5xsmall', vertical: '3xsmall' }",
    );
  });

  it('transforms default param value', () => {
    const input = `const Selector = ({ pad = 'small' }) => { return <Box></Box>}`;
    const output = runCodemod(input);
    expect(output).toContain("pad = 'xsmall'");
  });

  it('transforms default param value', () => {
    const input = `const Selector = ({ pad = 'small' }) => { return <Box pad = 'large' margin = 'xlarge'></Box>}`;
    const output = runCodemod(input);
    expect(output).toContain("pad = 'xsmall'");
    expect(output).toContain("pad = 'xlarge'");
    expect(output).toContain("margin = '3xlarge'");
  });

  it('transforms Grid columns object with array', () => {
    const input = `<Grid columns={{ count: 'fit', size: ['small', 'flex'] }} />`;
    const output = runCodemod(input);
    expect(output).toContain("size: ['xsmall', 'flex']");
  });
});
