import HttpClient from "./httpclient";

const services = {
  getCharacters: async ({
    page = 1,
    name,
    setLoading,
    selectedStatus,
    setCharactersList,
    setInfo,
  }) => {
    try {
      if (setLoading) {
        setLoading(true);
      }

      let endpoint = `character/?page=${page}`;
      if (name) {
        endpoint += `&name=${name}`;
      }
      if (selectedStatus) {
        endpoint += `&status=${selectedStatus}`;
      }

      const data = await HttpClient.Get(endpoint);

      if (page > 1) {
        setCharactersList((prev) => [...prev, ...data?.results]);
      } else {
        setCharactersList(data?.results);
      }
      setInfo(data.info);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        if (setLoading) {
          setLoading(false);
        }
      }, 500);
    }
  },

  getEpisodeDetail: async ({ setLoading, episodeId, setEpisodeDetails }) => {
    try {
      setLoading(true);
      const data = await HttpClient.Get(`episode/${episodeId}`);
      setEpisodeDetails(data);
    } catch (error) {
        console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  },
};

export default services;
