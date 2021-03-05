import chrome from 'chrome-aws-lambda'

interface IChromeOptions {
  args: string[]
  executablePath: string
  headless: boolean
}

const chromeExecPaths = {
  win32: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', // I'm using msedge!
  darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  linux: '/usr/bin/google-chrome',
}

const exePath = chromeExecPaths[process.platform]

export async function getOptions(isDev: boolean): Promise<IChromeOptions> {
  let options: IChromeOptions

  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
    }
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    }
  }

  return options
}
