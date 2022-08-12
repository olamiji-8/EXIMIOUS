import bell from "../assets/svg/home/bell 1.svg";
import dropDown from "../assets/svg/home/drop-down.svg";
import DropDown from "../components/ui/Dropdown";
import profileImage from "../assets/images/profile-image.png"
import { useState } from "react";

const Profile = ({name, image}) => {
    const [viewNotification, setViewNotification] = useState(false);
    const [viewProfile, setViewProfile] = useState(false);

    const toggleNotification = () => {
        setViewNotification(prev => !prev)
    }
    const toggleProfile = () => {
        setViewProfile(prev => !prev)
        console.log(viewProfile);
    }
    return (
        <div className="Profile">
            <div className="notification-bell">
                <img src={bell} alt="" onClick={toggleNotification} />
                {viewNotification&&
                <DropDown
                    texts={[
                        "Your profile verification was really successful",
                        "New features have been added on Renager",
                        "View all notifications",
                    ]}
                />
                }
            </div>
            <div className="navigation-user__image">
                <img src={image || profileImage} alt="" />
            </div>
            <p className="navigation-username"> {name || 'Oladele Titilayo Bolu'}</p>
            <div className="notification-drop__icon">
                <img src={dropDown} alt="" onClick={toggleProfile} />
                {viewProfile&&
                <DropDown
                texts={[
                  "Profile ",
                  "Dashboard",
                  "Saved Property",
                  "Property Documents",
                  "Referrals",
                  "Sign out",
                ]}
              />
                }
            </div>
        </div>
    )
}

export default Profile