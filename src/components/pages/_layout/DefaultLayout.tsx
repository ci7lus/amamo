import { colors } from '@/theme';

export type DefaultLayoutProps = Readonly<{
  headerContent?: React.ReactNode;
  children?: React.ReactNode;
}>;

export const DefaultLayout = ({ headerContent, children }: DefaultLayoutProps) => (
  <div className="layout">
    {headerContent}
    <main className="container">{children}</main>
    <style jsx>{`
      .layout {
        padding: 0 0 40px;
      }
      .container {
        width: 100%;
        max-width: 720px;
        margin: 48px auto 0;
        background-color: ${colors.foreground};
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 0 16px 0 rgba(0, 0, 0, 0.04);
      }
    `}</style>
  </div>
);
