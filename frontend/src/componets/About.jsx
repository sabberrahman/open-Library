
import Navbar from './Navbar'
import Footer from './Footer'




const posts = [
    {
      id: 1,
      title: '',
      href: '#',
      description:
        ` Computer Science student with a strong foundation in full-stack development using the MERN stack (MongoDB, Express.js, React.js, and Node.js). I'm constantly seeking to expand my knowledge and build innovative web applications.`,
      date: 'Oct 5, 2024',
      datetime: '2024-05-16',
      category: { title: 'Web development', href: '#' },
      author: {
        name: 'Shohanur Rahman Sabbir',
        role: 'Full Stack // Web Developer',
        href: '#',
        imageUrl:
          ``,
      },
    },
    
  ]



export default function About() {
  return ( 
    <div> 
     <Navbar/>
     <div className=" py-24 sm:py-32 max-w-screen-2xl container mx-auto md:px-20 px-4 h h-screen">
      <div className="mx-auto  px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight dark:text-gray-600 text-white sm:text-4xl items-center flex justify-center"> About the Developer</h2>
          
        </div>
        <div className="mx-auto mt-10 flex justify-center items-center gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1   ">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                <img src='/1702367598614.jpg' alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold dark:text-gray-600 text-white">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="dark:text-gray-600  text-gray-500">{post.author.role}</p>
                </div>
              </div>
              
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 dark:text-gray-900 group-hover:text-gray-600 text-gray-200">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5  text-md leading-7 dark:text-gray-600 text-gray-400">{post.description}</p>
              </div>
              
            </article>
          ))}
          
        </div>
        <div className='mx-auto mt-10 flex j justify-center items-center gap-x-8 gap-y-16'>
          
            <img src="https://th.bing.com/th/id/OIP.G_rPqmbGERBIgnEE-OWW9AAAAA?w=474&h=581&rs=1&pid=ImgDetMain" className='mt-4 object-cover w-60 md:ml-32' />
          
        </div>
       
       

      </div>
    </div>
   
    <Footer/>
</div>
  )
}
