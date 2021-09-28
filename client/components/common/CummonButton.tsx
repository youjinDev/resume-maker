import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import styled from 'styled-components';
import theme from '@/styles/theme';

interface ButtonProps {
  label: string;
  onPress?: () => void;
  targetLink?: any;
}

export const CommonButton = ({ label, onPress, targetLink }: ButtonProps) => {
  return (
    <MainButton type="secondary" onPress={() => onPress()}>
      {label}
    </MainButton>
  );
};

const MainButton = styled(AwesomeButton)`
  width: 100px;
`;
