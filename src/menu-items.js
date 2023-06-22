import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

const icons = {
  NavigationOutlinedIcon,
  HomeOutlinedIcon,
  AssessmentOutlinedIcon,
  CardGiftcardOutlinedIcon,
  DescriptionOutlinedIcon,
};

export default {
  items: [
    {
      id: 'navigation',
      title: 'Admin Panel',
      caption: 'Dashboard & Widgets',
      type: 'group',
      icon: icons.NavigationOutlinedIcon,
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: icons.HomeOutlinedIcon,
          url: '/dashboard',
        },
        {
          id: 'Device',
          title: 'Device',
          type: 'collapse',
          icon: icons.CardGiftcardOutlinedIcon,
          children: [
            {
              id: 'statistic',
              title: 'Trip',
              type: 'item',
              url: '/device/trip',
            },
            {
              id: 'data',
              title: 'Geofence',
              type: 'item',
              url: '/device/geofence',
            },
            {
              id: 'chart',
              title: 'Live',
              type: 'item',
              url: '/device/live',
            },
          ],
        },
      ],
    },
    {
      id: 'ui-Reports',
      title: 'Reports',
      type: 'group',
      icon: icons.AssessmentOutlinedIcon,
      children: [
        {
          id: 'Reports',
          title: 'Reports',
          type: 'collapse',
          icon: icons.AssessmentOutlinedIcon,
          children: [
            {
              id: 'Basic Report',
              title: 'Basic Report',
              type: 'item',
              url: '/reports/rpt-basicReport',
            },
            {
              id: 'currentoverview',
              title: 'Current over view',
              type: 'item',
              url: '/reports/rpt-currentoverview',
            },
            {
              id: 'movingoverview',
              title: 'Moving over view',
              type: 'item',
              url: '/reports/rpt-movingoverview',
            },
            {
              id: 'toppagereport',
              title: 'Stoppage Report',
              type: 'item',
              url: '/reports/rpt-stoppagereport',
            },
            {
              id: 'equipmentprodreport',
              title: 'Equipment Production Report',
              type: 'item',
              url: '/reports/rpt-equipmentprodreport',
            },
            {
              id: 'latestlocationreport',
              title: 'Latest Location Report',
              type: 'item',
              url: '/reports/rpt-latestlocationreport',
            },
            {
              id: 'seedreport',
              title: 'Speed Report',
              type: 'item',
              url: '/reports/rpt-seedreport',
            },
            {
              id: 'tranareawiseproductionreportsitreport',
              title: 'Area Wise Production Report',
              type: 'item',
              url: '/reports/rpt-areawiseproductionreport',
            },
            {
              id: 'tripweighbridgesreport',
              title: 'Trip Weighbridges Report',
              type: 'item',
              url: '/reports/rpt-tripweighbridgesreport',
            },
            {
              id: 'machinehelthcheck',
              title: 'Machine Helth Check',
              type: 'item',
              url: '/reports/rpt-machinehelthcheck',
            },
            {
              id: 'ReportOne',
              title: 'Report One',
              type: 'item',
              url: '/reports/rpt-reportOne',
            },
            {
              id: 'ReportTwo',
              title: 'Report Two',
              type: 'item',
              url: '/reports/rpt-reportTwo',
            },
            {
              id: 'Reports four',
              title: 'Report four',
              type: 'item',
              url: '/reports/rpt-reportfour',
            },
            {
              id: 'TripTetails',
              title: 'Trip Details',
              type: 'item',
              url: '/reports/rpt-tripdetails',
            },
          ],
        },
      ],
    },
    {
      id: 'ui-forms',
      title: 'Forms & Tables',
      type: 'group',
      icon: icons.DescriptionOutlinedIcon,
      children: [
        {
          id: 'forms',
          title: 'Forms',
          type: 'collapse',
          icon: icons.DescriptionOutlinedIcon,
          children: [
            {
              id: 'frm-basicform',
              title: 'Basic Form',
              type: 'item',
              url: '/forms/frm-basicform',
            },
            {
              id: 'frm-autocomplete',
              title: 'Autocomplete',
              type: 'item',
              url: '/forms/frm-autocomplete',
            },
            {
              id: 'frm-button',
              title: 'Button',
              type: 'item',
              url: '/forms/frm-button',
            },
            {
              id: 'frm-checkbox',
              title: 'Checkbox',
              type: 'item',
              url: '/forms/frm-checkbox',
            },
            {
              id: 'frm-datetime',
              title: 'Date & Time',
              type: 'item',
              url: '/forms/frm-datetime',
            },
            {
              id: 'frm-listbox',
              title: 'Listbox',
              type: 'item',
              url: '/forms/frm-listbox',
            },
          
          ],
        },
        {
          id: 'tables',
          title: 'Table',
          type: 'collapse',
          icon: icons.TableChartOutlinedIcon,
          children: [
            {
              id: 'table-basic',
              title: 'Basic Table',
              type: 'item',
              url: '/tables/table-basic',
            },  {
              id: 'datagrid-table',
              title: 'DataGrid Table',
              type: 'item',
              url: '/tables/table-datagrid',
            },
          ],
        },
      ],
    },
  ],
};
