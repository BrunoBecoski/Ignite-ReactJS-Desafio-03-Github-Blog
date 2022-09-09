import { InfoBannerContainer } from './stlyes';

type User = {
  title: string;
}

interface InfoBannerProps {
  user?: User;
}

export function InfoBanner({ user }: InfoBannerProps) {
  if(user) {
    return (
      <InfoBannerContainer>
        <h2>{user.title}</h2>
      </InfoBannerContainer>
    );
  }

  return (
    <></>
  );
}