import IconWrapper from "./IconWrapper";
import ImageWrapper from "./ImageWrapper";
import User from "./icons/User";

type Props = {
  image: string;
};

const UserProfile = ({ image }: Props) => {
  if (image)
    return <ImageWrapper src={image} className="w-8 h-8 rounded-full" alt="" />;
  return (
    <IconWrapper className="w-8 h-8 p-1 rounded-full bg-main-green-300">
      <User />
    </IconWrapper>
  );
};

export default UserProfile;
