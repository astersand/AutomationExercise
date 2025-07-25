import { chromium } from "@playwright/test";
import LoginPage from "./pages/loginPage";

async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await context.addCookies([
        {
            name: 'FCCDCF',
            value: '%5Bnull%2Cnull%2Cnull%2C%5B%22CQVAXwAQVAXwAEsACBENB0FoAP_gAEPgABBoK1IB_C7EbCFCiDp3IKMEMAhHABBAYsAwAAYBAwAADBIQIAQCgkEYBASAFCACCAAAKASBAAAgCAAAAUAAIAAVAABAAAwAIBAIIAAAgAAAAEAIAAAACIAAEQCAAAAEAEAAkAgAAAIASAAAAAAAAACBAAAAAAAAAAAAAAAABAAAAQAAQAAAAAAAiAAAAAAAABAIAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAQR2QD-F2I2EKFEHCuQUYIYBCuACAAxYBgAAwCBgAAGCQgQAgFJIIkCAEAIEAAEAAAQAgCAABQABAAAIAAAAAqAACAABgAQCAQQIABAAAAgIAAAAAAEQAAIgEAAAAIAIABABAAAAQAkAAAAAAAAAECAAAAAAAAAAAAAAAAAAAAAEABgAAAAAABEAAAAAAAACAQIAAA%22%2C%222~61.89.122.184.196.230.314.318.442.445.494.550.576.827.1029.1033.1046.1047.1051.1097.1126.1166.1301.1342.1415.1725.1765.1942.1958.1987.2068.2072.2074.2107.2213.2219.2223.2224.2328.2331.2387.2416.2501.2567.2568.2575.2657.2686.2778.2869.2878.2908.2920.2963.3005.3023.3100.3126.3219.3234.3235.3253.3309.3731.6931.8931.13731.15731~dv.%22%2C%22C97D29EE-6245-4BEC-996B-A801D563AD6A%22%5D%5D',
            path: '/',
            domain: '.automationexercise.com'
        }
    ]);

    let loginPage = new LoginPage(page);

    await page.goto(`${process.env.BASEURL}/login`);
    await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
    await page.context().storageState({ path: './LoginFile.json' });
    await browser.close();
}

export default globalSetup;