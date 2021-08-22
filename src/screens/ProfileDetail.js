import React, { useContext, useEffect, useCallback } from "react";
import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import ProfileContext from "../context/profile/profileContext";

const ProfileDetail = ({ id }) => {
  const profilesContext = useContext(ProfileContext);
  const { getProfileById, isLoading, single: profile } = profilesContext;

  const fetchProfile = useCallback(() => {
    getProfileById(id);
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <Container>
      <Header />
      <main className="p-8 space-y-4 container">
        {isLoading ? (
          <p className="text-center">Loading</p>
        ) : profile ? (
          <div className="grid grid-cols-6 gap-4">
            <div className="bg-white shadow-md col-span-4 p-4 rounded-md flex space-x-4 hover:shadow-lg flex-row">
              <div className="w-64 h-64">
                <img
                  src={
                    profile?.image
                      ? profile.image
                      : "https://via.placeholder.com/150"
                  }
                  alt="Profile"
                  className="w-full flex-none rounded-lg object-cover bg-gray-100"
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold mb-4">{`${profile.name}`}</h1>
                <h3 className="text-xl mb-2">{profile.title}</h3>

                <p className="mb-2">{profile.description}</p>
              </div>
            </div>
            <div className="bg-white shadow-md col-span-2 p-4 rounded-md flex flex-col hover:shadow-lg">
              {profile?.tweets?.length > 0 ? (
                profile.tweets.map((tweet) => (
                  <div className="p-4 mb-4 flex flex-row gap-4 border-2 rounded-md border-gray-100">
                    <div className="h-34 w-34">
                      <img
                        src={tweet.profile_image ? tweet.profile_image : "https://via.placeholder.com/150"}
                        alt="Tweet"
                        className="flex-none rounded-lg object-cover bg-gray-100 w-full"
                      />
                    </div>
                    <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                      <h2 className="font-semibold text-black mb-0.5 text-base">
                        {tweet.user}
                      </h2>
                      <p className="text-sm text-gray-500">{tweet.text}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">Tweets not found</p>
              )}
            </div>
          </div>
        ) : null}
      </main>
    </Container>
  );
};

export default ProfileDetail;
