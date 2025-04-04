import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Footer from "../../../components/Footer/Footer";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import SearchBox from "../../../components/CustomComponenet/SearchBox/SearchBox";
import CtListItem from "../../../components/CustomComponenet/CtListItem/CtListItem";
import CtLisItemLi from "../../../components/CustomComponenet/CtListItem/CtLisItemLi";
import Badge from "@mui/material/Badge";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ConversationBox from "./ConversationBox";
import IconBtn from "../../../components/CustomComponenet/IconBtn/IconBtn";
import SendIcon from '@mui/icons-material/Send';

const Message = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      component="section"
      sx={(theme) => ({
        p: { xs: 0.5, md: 2 },
        overflowY: "auto",
        maxHeight: "88vh",
        "&::-webkit-scrollbar": {
          width: { xs: "0px", md: "3px" },
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.primary.main,
          borderRadius: "2px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
      })}
    >
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={(theme) => ({
            maxHeight:{xs:'50vh', md:'inherit'},
            p: 1,
            borderRadius: 2,
            backgroundColor:
              theme.palette.mode === "light"
                ? colors.whiteSmoke[100]
                : colors.oxfordBlue[300],
          })}
        >
          <Grid size={12}>
            <SearchBox></SearchBox>
          </Grid>
          <Grid size={12} sx={{ mt: 2 }}>
            <CtListItem>
              <CtLisItemLi
                username={"Nitesh"}
                unseen_count={5}
                last_message={"Hii! whare..."}
              ></CtLisItemLi>
              <CtLisItemLi
                username={"Aman"}
                unseen_count={2}
                last_message={"Hii! what.."}
                selected={true}
              ></CtLisItemLi>
              <CtLisItemLi
                username={"Deepak"}
                unseen_count={10}
                last_message={"Hii! whare..."}
              ></CtLisItemLi>
              <CtLisItemLi
                username={"Dipesh"}
                unseen_count={1}
                last_message={"Hii! whare..."}
              ></CtLisItemLi>
              <CtLisItemLi
                username={"Ashish"}
                unseen_count={8}
                last_message={"Hii! whare..."}
              ></CtLisItemLi>
            </CtListItem>
          </Grid>
        </Grid>
        <Grid
          size={{ xs: 12, md: 8 }}
          sx={(theme) => ({
            p: 2,
            borderRadius: 2,
            backgroundColor:
              theme.palette.mode === "light"
                ? colors.whiteSmoke[100]
                : colors.oxfordBlue[300],
          })}
        >
          <Grid
            size={12}
            container
            sx={{
              justifyContent: "space-between",
              p: 1,
              borderBottom: "1px solid grey",
            }}
          >
            <Grid size={{ xs: 12, md: 6 }} container sx={{ ustifyContent: "space-around" }}>
              <Grid size={2}>
                <ListItemAvatar>
                  <Badge
                    overlap="circular"
                    variant="dot"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    badgeContent=""
                    color="success"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </Badge>
                </ListItemAvatar>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <ListItemText>
                  <Typography
                    variant="h6"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      letterSpacing: "-0.05em",
                      fontSize: "14px",
                      color: colors.teal[700],
                    }}
                  >
                    Nitesh Dubey
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      color: colors.success[700],
                      fontSize: "12px",
                    }}
                  >
                    Active
                  </Typography>
                </ListItemText>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{}}>
              <Stack direction="row" spacing={1}>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                  <DeleteIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                  <AlarmIcon />
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          <Grid
            size={12}
            sx={{
              p: 1,
              overflowY: "auto",
              maxHeight: "58vh",
              "&::-webkit-scrollbar": {
                width: "3px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.primary.main,
                borderRadius: "2px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
            }}
          >
            <ConversationBox
              conversation={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
              }
              user={2}
            ></ConversationBox>
            <ConversationBox
              conversation={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit.LLorem ipsum dolor, sit amet consectetur adipisicing elit.orem ipsum dolor, sit amet consectetur adipisicing elit."
              }
              user={2}
            ></ConversationBox>
            <ConversationBox
              conversation={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
              }
              user={1}
            ></ConversationBox>
            <ConversationBox
              conversation={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
              }
              user={1}
            ></ConversationBox>
            <ConversationBox
              conversation={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
              }
              user={1}
            ></ConversationBox>
          </Grid>
          <Grid
            size={12}
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextField
              id="message"
              label="Type a message"
              variant="outlined"
              size="small"
              fullWidth
              rows={1}
              multiline={true}
              sx={{
                borderRadius: 2,
              }}
            />
            <IconBtn>
              <SendIcon />
            </IconBtn>
          </Grid>
        </Grid>
      </Grid>

      <Footer></Footer>
    </Box>
  );
};

export default Message;
