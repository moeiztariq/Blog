export const SET_BLOG_LIST ="SET_BLOG_LIS"
export const INCREMENT_VIEW_COUNT ="INCREMENT_VIEW_COUNT"

export function setBlogList(data){
    return {
        type:SET_BLOG_LIST,
        payload:data,
    }
}

export function incrementViewCount(BlogId){
    return {
        type:INCREMENT_VIEW_COUNT,
        payload:BlogId,
    }
}