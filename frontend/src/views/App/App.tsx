import { RouterProvider } from "react-router-dom"
import router from "./router"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { RecoilRoot } from "recoil"

export const App = () => {

  return (
      <RecoilRoot>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </RecoilRoot>
)
}

