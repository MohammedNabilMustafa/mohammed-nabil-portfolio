import mainDashboard from '../../screenshoots/Ain Shams Business Operating System/Main Dashboard.png';
import executiveCommandCenter from '../../screenshoots/Ain Shams Business Operating System/Executive Command Center.png';
import salesDashboard from '../../screenshoots/Ain Shams Business Operating System/Sales Dashboard.png';
import crmClientHub from '../../screenshoots/Ain Shams Business Operating System/CRM & Client Hub.png';
import manufacturingDashboard from '../../screenshoots/Ain Shams Business Operating System/Manufacturing Dashboard.png';
import inventoryQrSystem from '../../screenshoots/Ain Shams Business Operating System/Inventory & QR System.png';
import financeReporting from '../../screenshoots/Ain Shams Business Operating System/Finance & Reporting.png';

import minsalStorefront from '../../screenshoots/Minsal/Screenshot 2026-06-28 at 5.20.46 PM.png';
import minsalCommandCenter from '../../screenshoots/Minsal/Screenshot 2026-06-28 at 5.22.59 PM.png';
import minsalProducts from '../../screenshoots/Minsal/Screenshot 2026-06-28 at 5.23.09 PM.png';
import minsalOrders from '../../screenshoots/Minsal/Screenshot 2026-06-28 at 5.23.22 PM.png';
import minsalCrmClients from '../../screenshoots/Minsal/Screenshot 2026-06-28 at 5.23.44 PM.png';
import minsalSupplyChain from '../../screenshoots/Minsal/Screenshot 2026-06-28 at 5.24.00 PM.png';

export const images = {
  ainShams: {
    mainDashboard,
    executiveCommandCenter,
    salesDashboard,
    crmClientHub,
    manufacturingDashboard,
    inventoryQrSystem,
    financeReporting,
  },
  minsal: {
    storefront: minsalStorefront,
    commandCenter: minsalCommandCenter,
    products: minsalProducts,
    orders: minsalOrders,
    crmClients: minsalCrmClients,
    supplyChain: minsalSupplyChain,
  },
  /** @deprecated use images.ainShams.mainDashboard */
  ainShamsDashboard: mainDashboard,
};
