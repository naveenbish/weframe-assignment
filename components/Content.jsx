import Image from "next/image";
import Cards from "./Cards";
import CardsThree from "./Cards3";
import CardsTwo from "./Cards2";
import Imagetest from "./Imageop";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MessageIcon from '@mui/icons-material/Message';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Content = () => {
  return (
    <div className="content-wrapper">

      {/* Title Starts here  */}

      <div className="h-[190px] bg-[color:#15132b] m-5 p-5  rounded-xl text-white">

        {/* Section One Of Title  */}
        <div className="flex justify-between">

          {/* Left Portion  */}
          <div>
            <div className="flex text-xl font-bold">
              <ArrowCircleLeftIcon className="mr-2 text-3xl text-[color:#A5A5A5]" />
              <div>School November Tasks</div>
            </div>
            <div className="text-xs font-normal ml-9 mt-3">Created by Instructor Day on November 31, 2022</div>
          </div>

          {/* Right Portion  */}
          <div className="flex gap-2">
            <div>
              <div className="text-base font-semibold">Centered Martial Arts</div>
              <div className="text-xs text-[color:#A5A5A5] font-semibold">Sunnyvale, Ca</div>
            </div>
            <div className="bg-white h-[40px] rounded-lg">
              <Image
                src='/assets/images/circled.png'
                width={40}
                height={10}
                alt="Just an icon"
              />
            </div>
            <div>
              <MoreVertIcon />
            </div>
          </div>
        </div>

        {/* Section Two of Title  */}
        <div className="flex justify-between items-center gap-3">

          {/* Stack Profile Circle First Part  */}
          <div className="flex ml-9 mt-3 py-2 items-center gap-2">
            <div class="flex -space-x-4">
              <div class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 bg-[color:#c4c4c4]"></div>
              <div class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 bg-[color:#c4c4c4]"></div>
              <div class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 bg-[color:#c4c4c4]"></div>
              <div class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 bg-[color:#c4c4c4]"></div>
              <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-[color:#e328af] border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">5+</a>
            </div>
            <div className="flex gap-1 rounded-lg bg-[color:#6418C3] p-2">
              <PersonAddAlt1Icon className="text-xl" />
              <div className="font-semibold">Invite People</div>
            </div>
            <div className="text-base border border-[color:#6418C3] p-2 px-4 rounded-lg">Private</div>
            <div className="text-base bg-[color:#7879F1] rounded-lg p-2 px-4">Edit</div>
            <div className="flex items-center gap-1 text-base border border-[color:#6418C3] p-2 px-4 rounded-lg">
              <MessageIcon />
              <div>45 Comments</div>
            </div>
          </div>

          {/* Progress Bar Second Part  */}
          <div className="flex items-center justify-center gap-2 mr-10">
            <div className="text-sm font-semibold">
              Total Progress 60%
            </div>
            <div className="progress">
              <div className="progress__bar"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Title End Here  */}

      {/* All Five Lists Starts from Here : To-Do, In Progress, Done, Revised, Contant  */}
      <div className="flex gap-5 max-w-screen-xl overflow-x-scroll">

        {/* To-Do List  */}
        <div className="w-[240px] m-5">
          {/* Heading  */}
          <div className="flex justify-between">
            <div>To-DO List(24)</div>
            <div className="text-[color:#6418C3]"><AddBoxIcon /></div>
          </div>
          <Cards />
          <CardsThree />
          <CardsTwo />
        </div>

        {/* In Progress  */}
        <div className="w-[220px] m-5">
          {/* Heading  */}
          <div className="flex justify-between">
            <div>In Progress(2)</div>
            <div className="text-3xl text-[color:#211A75] bg-[color:#6418C3] rounded-lg"><AddBoxIcon /></div>
          </div>
          <CardsThree />
          <Cards />
        </div>

        {/* Done */}
        <div className="w-[220px] m-5">
          {/* Heading  */}
          <div className="flex justify-between">
            <div>Done(3)</div>
            <div className="text-[color:#211A75]"><AddBoxIcon /></div>
          </div>
          <Cards />
          <Cards />
          <Cards />
        </div>

        {/* Revised  */}
        <div className="w-[220px] m-5">
          {/* Heading  */}
          <div className="flex justify-between">
            <div>Revised(0)</div>
            <div className="text-[color:#211A75]"><AddBoxIcon /></div>
          </div>
          <div className="bg-[color:#211A75] p-3 rounded-lg my-5">
            <div className="flex justify-center items-center">
              <div className="p-2 px-4 border-2 border-dotted text-center text-[color:#7879D1] bg-[color:#15132B] rounded-lg">Move card here</div>
            </div>
          </div>

        </div>

        {/* Contant */}
        <div className="w-[220px] m-5">
          {/* Heading  */}
          <div className="flex justify-between">
            <div>Contant(2)</div>
            <div className="text-[color:#211A75]"><AddBoxIcon /></div>
          </div>
          <Cards />
          <Cards />
          <Cards />
        </div>

        {/* Overflow Test */}
        <div className="w-[220px] m-5">
          {/* Heading  */}
          <div className="flex justify-between">
            <div>Contant(2)</div>
            <div className="text-[color:#211A75]"><AddBoxIcon /></div>
          </div>
          <Cards />
          <Cards />
          <Cards />
        </div>

      </div>

    </div>
  );
};

export default Content;
