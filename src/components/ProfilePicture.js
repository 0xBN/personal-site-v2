import { user } from 'data';
import { scrollAnimation } from 'utils';

export const ProfilePicture = ({ darkMode, customDisplay, customRounded }) => {
  let display = customDisplay ? customDisplay : 'hidden';
  let rounded = customRounded ? customRounded : null;

  const navigateTop = () => scrollAnimation('#hero');

  return (
    <img
      onClick={navigateTop}
      className={`${display} ${rounded} hover:saturate-150 md:block md:cursor-pointer`}
      src={darkMode ? user.profilePicDark : user.profilePicLight}
      alt=''
    />
  );
};
