import React from 'react';
import { Loadable } from '@/utils/Loadable';
import { SeaUser } from '@/models/SeaUser';
import { sizes, colors } from '@/theme';
import { useAppState } from '@/appState';

export const Account: React.FC<{ user: Loadable<SeaUser> }> = ({ user }) => (
  <div className="account">
    <span>@{user.read().screenName}</span>
    <style jsx>{`
      .account {
        font-size: 16px;
      }
    `}</style>
  </div>
);

export const SettingButton = () => (
  <div className="setting">
    <a>
      <i className="uil uil-cog" />
    </a>
    <style jsx>{`
      .setting {
        width: ${sizes.minTappable};
        height: ${sizes.minTappable};
        font-size: 20px;
        line-height: ${sizes.minTappable};
        text-align: center;
      }
      .setting a {
        display: block;
        width: 100%;
        height: 100%;
        color: ${colors.accent};
      }
    `}</style>
  </div>
);

export const HeaderLayout: React.FC = ({ children }) => (
  <header className="header-wrapper">
    <div className="header">{children}</div>
    <style jsx>{`
      .header-wrapper {
        width: 100%;
        height: 64px;
        background-color: ${colors.foreground};
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 0 16px 0 rgba(0, 0, 0, 0.04);
      }
      .header {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 720px;
        height: 100%;
        margin: 0 auto;
        padding: 0 12px;
      }
    `}</style>
  </header>
);

export const LoginedHeader = () => {
  const { seaAccount } = useAppState();
  return (
    <HeaderLayout>
      <Account user={seaAccount} />
      <SettingButton />
    </HeaderLayout>
  );
};

export const AuthHeader = () => <HeaderLayout />;