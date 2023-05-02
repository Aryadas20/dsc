import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";
import { Connect } from "react-redux";
 

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = ({friends}) => {
  return (
    <MainContainer>
      {friends.map((f) => (
        <FriendsListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStatetoProps = ({friends}) => {
  return{
    ...friends,
  };
};
export default connect(mapStoreStatetoProps)(FriendsList);

// export default ConnectedComponent = connect(null, mapActionsToProps)(PendingInvitationsListItem);
