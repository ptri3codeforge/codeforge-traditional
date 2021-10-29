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
      <div className="relative flex flex-col min-w-0 break-words bg-white-cream w-full mb-6 shadow-xl rounded-lg mt-2">
        <div className="px-6">
          <div className="flex justify-center">
                <img src="https://rediqless.s3.us-east-2.amazonaws.com/1629337049016.jpeg" className="shadow-xl rounded-full h-40 align-middle border-8 border-blue-light absolute -m-16  lg:-ml-16 max-w-150-px" />
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
            </div>
          </div>
          <div className="text-center m-24">
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
              <h1 className="font-bold ">Skill Level:</h1>
              <i className="text-left fas fa-briefcase mr-0 text-lg text-blueGray-400"></i>Senior Developer
            </div>
            <div className="mb-2 px-8  text-blueGray-600 mt-10 text-center">
              <h1 className="font-bold ">Current Role:</h1>
              <i className="fas fa-briefcase mr-0 text-lg text-blueGray-400"></i>Software Engineer @ RediQLess
            </div>
            <div className="mb-2 px-8  text-blueGray-600 mt-10 text-center">
              <h1 className="font-bold ">Open To:</h1>
              <i className="fas fa-briefcase mr-0 text-lg text-blueGray-400"></i>Mentoring
            </div>
          </div>

          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h1 className="text-2xl font-bold">About</h1>
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                
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
