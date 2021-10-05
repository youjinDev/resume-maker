import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import theme from '@/styles/theme';

interface ButtonProps {
  label: string;
  onPress: () => void | undefined;
  // targetLink?: any;
  width?: number;
}

export const CommonButton = ({ label, onPress, width }: ButtonProps) => {
  return (
    <MainButton variant="primary" onClick={() => onPress()} width={width}>
      {label}
    </MainButton>
  );
};

const MainButton = styled(Button)`
  width: ${(props) => (props.width ? props.width : 100)}px;
`;
