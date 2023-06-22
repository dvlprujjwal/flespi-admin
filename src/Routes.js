import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Loader from './component/Loader/Loader';
import NavMotion from './layout/NavMotion';
import MainLayout from './layout/MainLayout';

const BasicForm = lazy(() => import('./views/Form/BasicForm'));
const FrmButton = lazy(() => import('./views/Form/FrmButton'));
const FrmAutocomplete = lazy(() => import('./views/Form/FrmAutocomplete'));
const FrmCheckbox = lazy(() => import('./views/Form/FrmCheckbox'));
const FrmDatetime = lazy(() => import('./views/Form/FrmDatetime'));

const Trip = lazy(() => import('./views/Device/Trip'));
const Live = lazy(() => import('./views/Device/Live'));
const GeoFence = lazy(() => import('./views/Device/GeoFence'));

const BasicReport = lazy(() => import('./views/Reports/BasicReport'));
const ReportOne = lazy(() => import('./views/Reports/ReportOne'));
const ReportTwo = lazy(() => import('./views/Reports/ReportTwo'));
const ReportFour = lazy(() => import('./views/Reports/ReportFour.js'));
const Tripdetails = lazy(() => import('./views/Reports/tripdetails'));
const CurrentOverview = lazy(() => import('./views/Reports/CurrentOverview'));
const MovingOverview = lazy(() => import('./views/Reports/MovingOverview'));
const StoppageReport = lazy(() => import('./views/Reports/StoppageReport'));
const TransitReport = lazy(() => import('./views/Reports/TransitReport'));
const EquipmentProdReport = lazy(() => import('./views/Reports/EquipmentProdReport'));
const LatestLocationReport = lazy(() => import('./views/Reports/LatestLocationReport'));
const SpeedReport = lazy(() => import('./views/Reports/SpeedReport'));
const AreawiseProductionReport = lazy(() => import('./views/Reports/AreawiseProductionReport'));
const TripWeighbridgesReport = lazy(() => import('./views/Reports/TripWeighbridgesReport'));
const MachineHealthCheckReport = lazy(() => import('./views/Reports/MachineHelathCheck'));
const DataGridTable = lazy(() => import('./views/Tables/DataGridTable'));
const Page404 = lazy(() => import('./pages/Page404'));
const DashboardDefault = lazy(() => import('./views/Dashboard/index'));
const TableBasic = lazy(() => import('./views/Tables'));


const Routes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Redirect exact from="/" to="/dashboard" />

                    <Route
                        path={[


                            '/dashboard',
                            '/device/trip',
                            '/device/geofence',
                            '/device/live',


                            '/forms/frm-basicform',
                            '/forms/frm-autocomplete',
                            '/forms/frm-button',
                            '/forms/frm-checkbox',
                            '/forms/frm-datetime',
                            '/forms/frm-listbox',

                            // Reports Path
                            '/reports/rpt-basicReport',
                            '/reports/rpt-reportOne',
                            '/reports/rpt-reportTwo',
                            '/reports/rpt-reportfour',
                            '/reports/rpt-tripdetails',
                            '/reports/rpt-currentoverview',
                            '/reports/rpt-movingoverview',
                            '/reports/rpt-stoppagereport',
                            '/reports/rpt-transitreport',
                            '/reports/rpt-equipmentprodreport',
                            '/reports/rpt-latestlocationreport',
                            '/reports/rpt-seedreport',
                            '/reports/rpt-areawiseproductionreport',
                            '/reports/rpt-tripweighbridgesreport',
                            '/reports/rpt-machinehelthcheck',
                            '/tables/table-basic',
                            '/tables/table-datagrid'


                        ]}
                    >
                        <MainLayout>
                            <Switch location={location} key={location.pathname}>
                                <NavMotion>

                                    <Route path="/dashboard" component={DashboardDefault} />
                                    <Route path="/device/trip" component={Trip} />
                                    <Route path="/device/geofence" component={GeoFence} />
                                    <Route path="/device/live" component={Live} />

                                    {/*forms*/}
                                    <Route path="/forms/frm-basicform" component={BasicForm} />
                                    <Route path="/forms/frm-autocomplete" component={FrmAutocomplete} />
                                    <Route path="/forms/frm-button" component={FrmButton} />
                                    <Route path="/forms/frm-checkbox" component={FrmCheckbox} />
                                    <Route path="/forms/frm-datetime" component={FrmDatetime} />
                                    <Route path="/forms/frm-listbox" component={Page404} />


                                    {/*Tables*/}
                                    <Route path='/tables/table-basic' component={TableBasic} />
                                    <Route path='/tables/table-datagrid' component={DataGridTable} />

                                    {/* Reports */}
                                    <Route path='/reports/rpt-basicReport' component={BasicReport} />
                                    <Route path="/reports/rpt-reportOne" component={ReportOne} />
                                    <Route path="/reports/rpt-reportTwo" component={ReportTwo} />
                                    <Route path="/reports/rpt-reportfour" component={ReportFour} />
                                    <Route path="/reports/rpt-tripdetails" component={Tripdetails} />
                                    <Route path="/reports/rpt-currentoverview" component={CurrentOverview} />
                                    <Route path="/reports/rpt-movingoverview" component={MovingOverview} />
                                    <Route path="/reports/rpt-stoppagereport" component={StoppageReport} />
                                    <Route path="/reports/rpt-transitreport" component={TransitReport} />
                                    <Route path="/reports/rpt-equipmentprodreport" component={EquipmentProdReport} />
                                    <Route path="/reports/rpt-latestlocationreport" component={LatestLocationReport} />
                                    <Route path="/reports/rpt-seedreport" component={SpeedReport} />
                                    <Route path="/reports/rpt-areawiseproductionreport" component={AreawiseProductionReport} />
                                    <Route path="/reports/rpt-tripweighbridgesreport" component={TripWeighbridgesReport} />
                                    <Route path="/reports/rpt-machinehelthcheck" component={MachineHealthCheckReport} />
                                </NavMotion>
                            </Switch>
                        </MainLayout>
                    </Route>
                </Switch>
            </Suspense>
        </AnimatePresence>
    );
};

export default Routes;
