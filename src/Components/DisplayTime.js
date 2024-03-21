import * as React from "react";
import { Box } from "@mui/material";
import "./DisplayTime.css";

const DisplayTime = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="display-time">
      <Box
        height={100}
        width={100}
        borderRadius="1rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        margin="4rem"
        marginRight="1rem"
        sx={{
          backgroundImage:
            "linear-gradient(45deg, rgba(241,38,172,1) 5%, rgba(110,219,237,1) 90%)",
          boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="text">
          <span className="countdown-value">{days}</span>
          Days
        </div>
      </Box>
      <Box
        height={100}
        width={100}
        borderRadius="1rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        margin="4rem"
        marginLeft="1rem"
        marginRight="1rem"
        sx={{
          backgroundImage:
            "linear-gradient(45deg, rgba(241,38,172,1) 5%, rgba(110,219,237,1) 90%)",
          boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="text">
          <span className="countdown-value">{hours}</span>
          Hours
        </div>
      </Box>
      <Box
        height={100}
        width={100}
        borderRadius="1rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        margin="4rem"
        marginLeft="1rem"
        marginRight="1rem"
        sx={{
          backgroundImage:
            "linear-gradient(45deg, rgba(241,38,172,1) 5%, rgba(110,219,237,1) 90%)",
          boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="text">
          <span className="countdown-value">{minutes}</span>
          Minutes
        </div>
      </Box>
      <Box
        height={100}
        width={100}
        borderRadius="1rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        margin="4rem"
        marginLeft="1rem"
        sx={{
          backgroundImage:
            "linear-gradient(45deg, rgba(241,38,172,1) 5%, rgba(110,219,237,1) 90%)",
          boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="text">
          <span className="countdown-value">{seconds}</span>
          Seconds
        </div>
      </Box>
    </div>
  );
};

export default DisplayTime;
