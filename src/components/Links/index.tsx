import { Links } from "./style";

interface iLinksProps {
  variant?: string;
  children: React.ReactNode;
  to: string;
}

const Link = ({ variant, children, to }: iLinksProps) => (
  <Links to={to} variant={variant}>
    {children}
  </Links>
);

export default Link;
