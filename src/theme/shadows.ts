const defaultShadows = [
  'none', // 0
  '0px 1px 0px 0px rgba(0, 0, 0, 0.02), 2px 3px 3px 0px rgba(0, 0, 0, 0.06)', // 1
  '0px 1px 1px 0px rgba(0, 0, 0, 0.03), 2px 2px 10px 0px rgba(0, 0, 0, 0.09)', // 2
  '4px 4px 18px -2px rgba(231, 228, 232, 0.8)', // 3

  '0px -2.46px 3.86px 0px rgba(0, 0, 0, 0.02), 0px 2.258px 4.692px 0px rgba(0, 0, 0, 0.02), 0px 6.147px 9.475px 0px rgba(0, 0, 0, 0.03), 4px 18px 18px 0px rgba(0, 0, 0, 0.04)',

  '0px -1px 3.15px 0px rgba(0, 0, 0, 0.02), 0px 5.695px 3.531px 0px rgba(0, 0, 0, 0.01), 1px 10.271px 9.478px 0px rgba(0, 0, 0, 0.03), 3px 24px 42px 0px rgba(0, 0, 0, 0.07)',

  '0px -2px 6px 0px rgba(0, 0, 0, 0.03), 1px 10px 10px 0px rgba(0, 0, 0, 0.01), 0px 20px 17.48px 0px rgba(0, 0, 0, 0.03), 4px 38px 47px 0px rgba(0, 0, 0, 0.07)',

  '0px -2px 6px 0px rgba(0, 0, 0, 0.03), 2px 10px 10px 0px rgba(0, 0, 0, 0.01), 1px 20px 19px 0px rgba(0, 0, 0, 0.03), 6px 33px 46px 0px rgba(0, 0, 0, 0.07)',

  '0px -2px 6px 0px rgba(0, 0, 0, 0.03), 2px 10px 10px 0px rgba(0, 0, 0, 0.01), 1px 20px 65px 0px rgba(0, 0, 0, 0.02), 16px 39px 67px 0px rgba(0, 0, 0, 0.11)',
  // ...
];

const fillShadows = (shadows: string[], totalShadows: number) => {
  const filledShadows = [...shadows];
  const defaultShadow = '0px 0px 0px 0px rgba(0, 0, 0, 0.0)';
  // Default shadow for filling

  while (filledShadows.length < totalShadows) {
    filledShadows.push(defaultShadow);
  }

  return filledShadows.slice(0, totalShadows);
};

const shadows = fillShadows(defaultShadows, 25);
export default shadows;
