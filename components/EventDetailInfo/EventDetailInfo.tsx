import { Box, Container, Link } from "@mui/material";
import { RichContent } from "../RichContent";
import { Typography } from "../Typography";
import { Event } from "../../models/event";

export type EventDetailInfoProps = Pick<
  Event,
  "longDescription" | "dateTime" | "location" | "otherInfo"
>;

const EventDetailInfo: React.FC<EventDetailInfoProps> = ({
  dateTime,
  longDescription,
  location,
  otherInfo,
}: EventDetailInfoProps) => {
  let formatedDateTime = `${dateTime.getDate()}/${
    dateTime.getMonth() + 1
  }/${dateTime.getFullYear()}`;
  if (dateTime.getHours() || dateTime.getMinutes()) {
    formatedDateTime += ` às ${dateTime.getHours()}h${dateTime
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }
  let otherInfoBlock;
  if (otherInfo) {
    otherInfoBlock = (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography variant="h4" color="feature">
          Outras informações
        </Typography>
        <RichContent content={otherInfo} />
      </Box>
    );
  }
  return (
    <Box
      id="sobre"
      sx={{
        padding: "88px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container sx={{ display: "flex", gap: "110px" }}>
        {/* SOBRE */}
        <Box
          data-scroll-wrapper
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography variant="h3">Sobre o evento</Typography>
          <RichContent content={longDescription} />
        </Box>
        {/* /SOBRE */}
        {/* PARTICIPE */}
        <Box
          sx={{
            flex: 0.85,
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <Typography variant="h3">Participe</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography variant="h4" color="feature">
              Data e horário
            </Typography>
            <Typography>{formatedDateTime}</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography variant="h4" color="feature">
              Local
            </Typography>
            <Link
              sx={{ color: "black" }}
              href={"https://www.google.com/maps/search/" + location}
              target="_blank"
            >
              {location}
            </Link>
          </Box>
          {otherInfoBlock}
        </Box>
        {/* /PARTICIPE */}
      </Container>
    </Box>
  );
};

export default EventDetailInfo;
