import React, { useContext, useEffect, useCallback } from "react";
import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import { useNavigate } from "@reach/router";
import ProfileContext from "../context/profile/profileContext";

const ProfileList = () => {
  const navigate = useNavigate();
  const profilesContext = useContext(ProfileContext);
  const { getProfiles, isLoading, all: profiles } = profilesContext;

  const goToDetail = (id) => {
    if (!id) return;

    navigate(`profile-detail/${id}`);
  };

  const fetchProfile = useCallback(() => {
    getProfiles();
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <Container>
      <Header />

      <main className="w-1/2 p-8 space-y-4">
        {isLoading ? (
          <p className="text-center">Loading</p>
        ) : (
          profiles.map((profile, index) => (
            <div
              onClick={() => goToDetail(profile.profileId)}
              className="bg-white shadow-md p-4 rounded-md flex space-x-4 hover:shadow-lg cursor-pointer"
              key={`profile${index}`}
            >
              <img
                src={profile.image ? profile.image : "https://via.placeholder.com/150"}
                alt=""
                className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
                width="100"
                height="100"
              />

              <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                <h2 className="text-lg font-semibold text-black mb-0.5">
                  {`${profile.name}`}
                </h2>
                <dl className="flex flex-wrap text-sm font-medium whitespace-pre text-gray-400 mb-2">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd>{profile.title}</dd>
                  </div>
                </dl>

                <p>{profile.description}</p>
              </div>
            </div>
          ))
        )}
      </main>
    </Container>
  );
};

export default ProfileList;
