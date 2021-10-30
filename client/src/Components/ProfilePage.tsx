import React, { useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateBio } from '../redux/reducers/user';
import {BiMap} from 'react-icons/bi'



const ProfilePage = () => {
      //@ts-ignore: Unreachable code error
  const { userName, userBio } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [bio, setbio] = useState('');
    return (
        <div>
        
            {/* <h1>User name:{userName}</h1>
             <h1>User Bio:{userBio}</h1>
     <form>
        <label>
          Update Bio:
          <textarea
            value={bio}
            onChange={(e) => {
              setbio(e.target.value);
            }}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(bio);
            dispatch(updateBio(bio));
          }}
        >
          Submit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setbio('');
          }}
        >
          Clear
        </button>
      </form> */}


  <section className="relative py-16 ">
    <div className="container mx-auto px-4">
      <div className=" relative flex flex-col min-w-0 break-words bg-white-cream w-full mb-6 shadow-xl rounded-lg mt-2">
        <div className="px-6">
          <div className="flex justify-center">
                <img src="https://rediqless.s3.us-east-2.amazonaws.com/1629337049016.jpeg" className="shadow-xl rounded-full h-40 align-middle border-8 border-blue-light absolute -m-16  lg:-ml-16 max-w-150-px" />
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
            </div>
          </div>
          
          <div className="text-center m-24 mb-10 ">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-darkBlue-default mb-2">
              Charlie Malave
            </h3>

            <div className="text-sm leading-normal font-bold uppercase h-10">
              <i className="mr-auto text-lg text-darkBlue-default"></i>
              <span className="inline-flex h-12 w-12 mt-2 -mr-6 text-xl">
              <BiMap />
              </span>
              New York, NY
             </div>

            <div className="flex flex-row justify-center text-left"> 
              <div className="mb-2 px-8 text-blueGray-600 mt-10 text-center">
              <h1 className="font-bold text-xl text-blue-default">Skill Level:</h1>
              <i className="text-left mr-0 text-lg text-blueGray-400"></i>Senior Developer
              </div>
            <div className="mb-2 px-8  text-blueGray-600 mt-10 text-center">
              <h1 className="font-bold text-xl text-blue-default">Current Role:</h1>
              <i className=" mr-0 text-lg text-blueGray-400"></i>Software Engineer @ RediQLess
            </div>
            <div className="mb-2 px-8  text-blueGray-600 mt-10 text-center">
              <h1 className="font-bold text-xl text-blue-default">Open To:</h1>
              <i className="text-lg mr-0 text-blueGray-400"></i>Mentoring
            </div>
          </div>
          </div>

          <div className="mt-4 py-4 mb-4 border-t border-darkBlue-default text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h1 className="text-2xl font-bold text-blue-default">Top Technical Skills</h1>
                <p className="mb-0 text-lg leading-relaxed text-blueGray-700">
                  <ul>React</ul>
                  <ul>GraphQL</ul>
                  <ul>KafkaJS</ul>
                </p>     
              </div>
            </div>
          </div>


          <div className="mt-4 py-4 mb-4 border-t border-darkBlue-default text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h1 className="text-2xl font-bold text-blue-default">About</h1>
                <p className="mb-4 text-lg leading-relaxed text-darkBlue-default">
                Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                
              </div>
            </div>
          </div>

          <div className="mt-4 py-4 mb-4 border-t border-darkBlue-default text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h1 className="text-2xl font-bold text-blue-default mb-2">Highlight Reel</h1>

                <div>
                <div className="w-full flex flex-col justify-evenly mb-2 ">
                  
                  <div className="transform transition duration-500 hover:scale-110 text-center mx-20 text-white-cream  bg-darkBlue-default shadow-2xl rounded-lg border-blue-light border-4 mb-4">
                    <a href="https://medium.com/@iankimjudd/introducing-rediqless-a-caching-tool-for-graphql-apis-e4846302f040">
                    <h1 className="p-2">RediQLess Medium Article</h1>
                    </a>
                  </div>

                  <div className="transform transition duration-500 hover:scale-110 text-center mx-20 text-white-cream  bg-darkBlue-default shadow-2xl rounded-lg border-blue-light border-4 mb-4">
                    <a href="https://charliemalave.com/">
                    <h1 className="p-2">Portfolio Website</h1>
                    </a>
                  </div>

                  <div className="transform transition duration-500 hover:scale-110 text-center mx-20 text-white-cream  bg-darkBlue-default shadow-2xl rounded-lg border-blue-light border-4 mb-4">
                    <a href="https://anchor.fm/javaunscripted">
                    <h1 className="p-2">JavaUnsscripted (Podcast)</h1>
                    </a>
                  </div>

                  <div className="transform transition duration-500 hover:scale-110 text-center mx-20 text-white-cream  bg-darkBlue-default shadow-2xl rounded-lg border-blue-light border-4 mb-4">
                    <a href="https://www.canva.com/design/DAEsnmc1EOA/sl6ZPcmhpVmcsKb3mKsHtA/view">
                    <h1 className="p-2">Serverless Arcitecture W/AWS Lambda Tech Talk</h1>
                    </a>
                  </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 py-4 mb-4 border-t border-darkBlue-default text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h1 className="text-2xl font-bold text-blue-default">Connect</h1>
                <ul className="mb-4 text-lg leading-relaxed text-darkBlue-default">
                <a href="https://github.com/cmalave13"/>
                </ul>
                
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        
      </div>
    </div>
  </div>
</footer>
  </section>

        </div>
    )
}

export default ProfilePage
