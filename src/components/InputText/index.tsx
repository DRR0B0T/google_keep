import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UTurnLeftOutlinedIcon from "@mui/icons-material/UTurnLeftOutlined";
import UTurnRightOutlinedIcon from "@mui/icons-material/UTurnRightOutlined";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { AppContext } from "../../hoc/Context";

export const InputText: React.FC = () => {
  const { value, setValue, setChangeArea } = React.useContext(AppContext);

  const onClearInput = () => {
    setValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  //moving caret to the end of string when user clicked on it
  const moveCaretAtEnd = (e: React.FocusEvent<HTMLInputElement>): void => {
    let temp_value = e.target.value;
    e.target.value = "";
    e.target.value = temp_value;
  };

  return (
    <TextField
      onFocus={moveCaretAtEnd}
      autoFocus
      value={value}
      multiline
      minRows={1}
      maxRows={15}
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "inherit",
        borderRadius: "5px",
        boxShadow: "-1px 1px 2px 2px #C2C3C3",
        "& fieldset": { border: "none" },
        "& textarea": { pt: "15px", mt: 3, fontSize: ".875rem" },
        "& .MuiInputBase-root": {
          p: "0.7em",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          "& textarea::placeholder": {
            color: "#4c4c4c",
            opacity: 1,
            fontWeight: 500,
          },
        },
      }}
      placeholder="Заметка..."
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Typography
              color="secondary"
              sx={{
                mt: 2,
                fontWeight: 500,
              }}
              variant="body1"
            >
              Введите заголовок
            </Typography>
            <Tooltip
              sx={{
                position: "absolute",
                right: 0,
                top: 3,
              }}
              title="Закрепить заметку"
              placement="bottom"
            >
              <IconButton>
                <PushPinOutlinedIcon />
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            sx={{
              display: "flex",
              width: 220,
              mb: 2,
              mt: 4,
            }}
            position="end"
          >
            <Tooltip title="Сохранить напоминание" placement="bottom">
              <IconButton type="button" aria-label="Сохранить напоминание">
                <AddAlertOutlinedIcon fontSize={"small"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Соавторы" placement="bottom">
              <IconButton type="button" aria-label="Соавторы">
                <PersonAddAltOutlinedIcon fontSize={"small"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Параметры фона" placement="bottom">
              <IconButton type="button" aria-label="Параметры фона">
                <PaletteOutlinedIcon fontSize={"small"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Добавить картинку" placement="bottom">
              <IconButton type="button" aria-label="Добавить картинку">
                <PhotoOutlinedIcon fontSize={"small"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Архивировать" placement="bottom">
              <IconButton type="button" aria-label="Архивировать">
                <ArchiveOutlinedIcon fontSize={"small"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Ещё" placement="bottom">
              <IconButton type="button" aria-label="Ещё">
                <MoreVertOutlinedIcon fontSize={"small"} />
              </IconButton>
            </Tooltip>
            {!value ? (
              <IconButton
                sx={{
                  transform: "rotate(90deg)",
                }}
                type="button"
                aria-label="Отменить"
                onClick={onClearInput}
                disabled
              >
                <UTurnLeftOutlinedIcon fontSize={"small"} />
              </IconButton>
            ) : (
              <Tooltip title="Отменить" placement="bottom">
                <IconButton
                  sx={{
                    transform: "rotate(90deg)",
                  }}
                  type="button"
                  aria-label="Отменить"
                  onClick={onClearInput}
                >
                  <UTurnLeftOutlinedIcon fontSize={"small"} />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Повторить" placement="bottom">
              <IconButton
                sx={{ transform: "rotate(270deg)" }}
                type="button"
                aria-label="Повторить"
              >
                <UTurnRightOutlinedIcon fontSize={"small"} />
              </IconButton>
            </Tooltip>
            <Button
              sx={{
                position: "absolute",
                textTransform: "none",
                right: 10,
                w: 40,
                h: 20,
                color: "#212121",
              }}
              onClick={() => setChangeArea(false)}
            >
              Закрыть
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};
