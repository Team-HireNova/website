import Button, { ButtonProps } from "components/Button";
import styled from "styled-components";

const Wrapper = styled(Button)`
  justify-content: flex-start;
  background: white;
  padding: 20px 40px;
`;

interface ItemProps extends ButtonProps {}

const Item = ({ className, children, ...props }: ItemProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Item;