import BlogPage from'../pages/blog_page';

describe('Blog Page', () => {
    it('Get the list of all Recent Posts & ' +
    'Assert the text length of each itenm in the list is greater than 10 characters & ' +
    'Assert total count of rows equals 5', async() => {

        //Open Blog Page
       // await browser.url('/blog');
       await BlogPage.openBlogPage();

        //Get Recent Posts elements
        //const postsList=await $$("#recent-posts-3 li");
        const postsList=await BlogPage.listRecentPosts;

        // Loop through the list and assert the text length of each itenm is greater than 10 characters
        for(const item of postsList){
            const text=await item.getText();
            await expect(text.length).toBeGreaterThan(10);
        }

        //Assert total count of rows equals to 5
        await expect(postsList.length).toEqual(5);
       // await expect(postsList).toHaveLength(5);

     });
});