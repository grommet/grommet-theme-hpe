import { describe, it, expect } from 'vitest';
import jscodeshift from 'jscodeshift';
import migrateTshirtSizes from '../migrate-tshirt-sizes';

// Helper to run codemod on code string
function runCodemod(input, options = { quote: 'single' }) {
  // Simulate jscodeshift API
  const api = {
    jscodeshift,
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
  // Do we need to test for DataChart size prop?
  // according to doc, https://v2.grommet.io/datachart#size,
  // The size of the Charts. This does not include the axes and any gap.
  // It is passed through to the underlying
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
    expect(output).toContain("['xsmall', 'small'].includes(size)");
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
  it('transforms pad in List defaultItemProps', () => {
    const input = `<List
        data={serverGroups}
        defaultItemProps={{
          pad: { vertical: 'small' },
        }}
      />`;
    const output = runCodemod(input);
    expect(output).toContain("pad: { vertical: 'xsmall' }");
  });

  it('transforms nested props in dropProps', () => {
    const input = `<Select 
        dropProps={{ 
          pad: 'xsmall', 
          margin: 'large',
          round: 'small',
          height: 'xlarge'
        }} 
      />`;
    const output = runCodemod(input);
    expect(output).toContain("pad: '3xsmall'");
    expect(output).toContain("margin: 'xlarge'");
    expect(output).toContain("round: 'medium'");
    expect(output).toContain("height: 'xxlarge'");
  });

  it('transforms nested props in buttonProps', () => {
    const input = `<Component 
        buttonProps={{ 
          pad: { horizontal: 'small', vertical: 'xsmall' },
          margin: 'large'
        }} 
      />`;
    const output = runCodemod(input);
    expect(output).toContain("horizontal: 'xsmall'");
    expect(output).toContain("vertical: '3xsmall'");
    expect(output).toContain("margin: 'xlarge'");
  });

  it('transforms nested props in boxProp', () => {
    const input = `<Component 
        boxProp={{ 
          width: 'large',
          round: 'xlarge',
          pad: ['small', 'medium']
        }} 
      />`;
    const output = runCodemod(input);
    expect(output).toContain("width: 'xlarge'");
    expect(output).toContain("round: 'xxlarge'");
    expect(output).toContain("pad: ['xsmall', 'medium']");
  });

  it('transforms nested props in paginate', () => {
    const input = `<DataTable 
        paginate={{ 
          pad: 'xxsmall',
          margin: { top: 'small', bottom: 'large' }
        }} 
      />`;
    const output = runCodemod(input);
    expect(output).toContain("pad: '5xsmall'");
    expect(output).toContain("top: 'xsmall'");
    expect(output).toContain("bottom: 'xlarge'");
  });
  it('transforms nested props in contentProps', () => {
    const input = `<FormField
      label="Title"
      contentProps={{ width: 'small' }}
      required
      name="application-title"
      htmlFor="application-title"
    />`;
    const output = runCodemod(input);
    expect(output).toContain("width: 'xsmall'");
  });
  it('transforms nested size prop in border object', () => {
    const input = `<Box border={{ color: 'transparent', size: 'xlarge' }} />`;
    const output = runCodemod(input);
    expect(output).toContain("size: 'large'");
  });
  it('transforms size values in ternary with includes array using known variable', () => {
    const input = `const pad = ['xsmall', 'small', 'medium'].includes(breakpoint)
    ? 'small'
    : 'large';`;
    const output = runCodemod(input);
    expect(output).toContain(
      "['xsmall', 'small', 'medium'].includes(breakpoint)",
    );
    expect(output).toContain("? 'xsmall'");
    expect(output).toContain(": 'xlarge'");
  });
});
