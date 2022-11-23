import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  gap: 1rem;
  padding: 3rem;
  margin-top: 3rem;
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
  a:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  a:active {
    color: ${({ theme }) => theme.colors.hover.secondary};
  }

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.active.secondary};
`;
