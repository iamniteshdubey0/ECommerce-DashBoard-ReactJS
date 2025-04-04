import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const ConversationBox = ({ conversation, user }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{
        display:'flex',
        justifyContent: user === 1 ? "right" : "left",
    }}>
      <Box
        sx={{
          my: 0.3,
          maxWidth: {xs:"90%", md:'35vw'},
          p:2,
          pb: 1, 
          borderRadius: 2,
          backgroundColor:
            theme.palette.mode === "light"
              ? user === 1
                ? colors.teal[100]
                : colors.primary[100]
              : user === 2
              ? colors.primary[800]
              : colors.teal[800],
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color:
              theme.palette.mode === "light"
                ? colors.oxfordBlue[600]
                : colors.oxfordBlue[400],
          }}
        >
          {conversation}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            mt:0.5,
            display:'block',
            textAlign:'right',
            color:
              theme.palette.mode === "light"
                ? colors.oxfordBlue[600]
                : colors.oxfordBlue[400],
          }}
        >
          11:58
        </Typography>
      </Box>
    </Box>
  );
};

export default ConversationBox;
