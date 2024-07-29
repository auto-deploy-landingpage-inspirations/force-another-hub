import {
  Box,
  Button,
  Clickable,
  Stack,
  Text,
  useDidMount,
} from "@artsy/palette"
import { FC, useRef } from "react"
import ArtsyMarkIcon from "@artsy/icons/ArtsyMarkIcon"
import { useDeviceDetection } from "Utils/Hooks/useDeviceDetection"
import { Z } from "Apps/Components/constants"
import CloseIcon from "@artsy/icons/CloseIcon"
import Cookies from "cookies-js"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { useOnce } from "Utils/Hooks/useOnce"

const APP_DOWNLOAD_FOOTER_KEY = "AppDownloadFooter"

interface AppDownloadFooterProps {}

export const AppDownloadFooter: FC<AppDownloadFooterProps> = () => {
  const isMounted = useDidMount()

  const ref = useRef<HTMLDivElement | null>(null)

  const { downloadAppUrl } = useDeviceDetection()

  useOnce(() => {
    const init = async () => {
      if (!ref.current || !("animate" in ref.current)) return

      const animation = ref.current.animate(
        [{ transform: "translateY(100%)" }, { transform: "translateY(0)" }],
        { duration: 250, easing: "ease-out", fill: "forwards" }
      )

      await animation.finished
    }

    requestAnimationFrame(init)
  })

  const handleDismiss = async () => {
    Cookies.set(APP_DOWNLOAD_FOOTER_KEY, 1, { expires: 0 })

    if (!ref.current) return

    const animation = ref.current.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(100%)" }],
      { duration: 250, easing: "ease-out", fill: "forwards" }
    )

    await animation.finished
  }

  if (!isMounted || Cookies.get(APP_DOWNLOAD_FOOTER_KEY)) {
    return null
  }

  return (
    <AppDownloadFooterPanel ref={ref as any}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        gap={1}
      >
        <Stack gap={1} flexDirection="row" alignItems="center">
          <Box bg="black100" color="white100" p={0.5} borderRadius={3}>
            <ArtsyMarkIcon width={30} height={30} />
          </Box>

          <Text variant="md">Get the app, get the art.</Text>
        </Stack>

        <Clickable onClick={handleDismiss}>
          <CloseIcon />
        </Clickable>
      </Box>

      <Button
        variant="primaryBlack"
        width="100%"
        size="small"
        // @ts-ignore
        as="a"
        href={downloadAppUrl}
        target="_blank"
      >
        Download Artsy
      </Button>
    </AppDownloadFooterPanel>
  )
}

const AppDownloadFooterPanel = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${themeGet("space.2")};
  padding: ${themeGet("space.2")};
  background-color: ${themeGet("colors.white100")};
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${Z.appDownloadFooter};
  box-shadow: ${themeGet("effects.dropShadow")};
`
