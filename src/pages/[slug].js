const page = ({username,notFound})=>{
    return (
        <>
        {!notFound && 
        <p>{username}</p>
        }
        </>
    )
}
export default page;
export async function getServerSideProps({ params }) {
    const { slug } = params;
    try {
      return {
        props: {
          username:slug,
        },
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        notFound: true, // Return a 404 page if data fetch fails
      };
    }
  }