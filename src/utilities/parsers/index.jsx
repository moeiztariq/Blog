export const parseBlogData = (data) => {
    return data.reverse().map((item) => ({
      id: item?.id,
      img: item?.Image,
      title: item?.Title,
      subTitle: item?.Subtitle,
      viewCount:0
    }));
  };

  export const parseSingleBlogData = (data) => {
    return {
      id: data?.id,
      img: data?.Image,
      title: data?.Title,
      subTitle: data?.Subtitle,
      article:data?.Article
    };
  };