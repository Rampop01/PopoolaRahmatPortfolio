import {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

function EducationTimeLine() {
  return (
    <div className="w-[32rem] flex flex-col relative">
      <Timeline>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Ahmadu Bello University, Kaduna
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-slate-400">
              BSC. Zoology.<br></br> 2015 - 2020.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <div className="connector-line" />
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <BellIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              TIIDELab Initiative
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-slate-400">
              Frontend Development. <br></br> 2023 - 2023
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <div className="connector-line" />
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <CurrencyDollarIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Modelak College Of Art & Sciences.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-slate-400">
              Science<br></br> 2008 - 2013
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default EducationTimeLine;
