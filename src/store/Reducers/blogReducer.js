import {
  INCREMENT_VIEW_COUNT,
  SET_BLOG_LIST,
} from "../Actions/BlogActions/blogActions";

export const initialState = {
  blogList: [],
  countWithIds:[]
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOG_LIST:
      return {
        ...state,
        blogList: action.payload,
      };
      case INCREMENT_VIEW_COUNT:
        return {
          ...state,
          countWithIds:[...state.countWithIds,action.payload],
          blogList: state.blogList.map((blog) => {
            if (blog.id === action.payload) {
              return {
                ...blog,
                viewCount: blog.viewCount + 1,
              };
            }
            return blog; 
          }),
      };
    default:
      return state;
  }
};

