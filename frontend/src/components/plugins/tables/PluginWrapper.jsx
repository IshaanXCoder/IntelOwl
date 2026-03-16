import React from "react";
import PropTypes from "prop-types";
import { Container, Col } from "reactstrap";
import useTitle from "react-use/lib/useTitle";
import { Link } from "react-router-dom";

import { useDataTable, TableHintIcon, SyncButton } from "@certego/certego-ui";

import { useOrganizationStore } from "../../../stores/useOrganizationStore";
import { PluginsTypes } from "../../../constants/pluginConst";
import { INTELOWL_DOCS_URL } from "../../../constants/environment";

// table config
const tableConfig = {};
const tableInitialState = {
  pageSize: 6,
  sortBy: [{ id: "name", desc: false }],
};

export default function PluginWrapper({
  heading,
  description,
  apiUrl,
  columns,
  type,
}) {
  const organizationPluginsState = useOrganizationStore(
    React.useCallback((state) => state.pluginsState, []),
  );

  const refetchRef = React.useRef(() => {});
  const rowRefetch = React.useCallback(() => refetchRef.current(), []);

  const tableProps = React.useMemo(
    () => ({
      config: tableConfig,
      initialState: tableInitialState,
      columns,
      autoResetPage: false,
    }),
    [columns],
  );

  const dataModifier = React.useCallback(
    (responseData) =>
      (responseData?.results || []).map((data) => ({
        ...data,
        orgPluginDisabled:
          organizationPluginsState[data.name] !== undefined &&
          organizationPluginsState[data.name].disabled,
        plugin_type: type,
        refetch: rowRefetch,
      })),
    [organizationPluginsState, type, rowRefetch],
  );

  const tableConfigData = React.useMemo(() => ({ url: apiUrl }), [apiUrl]);

  const [data, tableNode, refetch] = useDataTable(
    tableConfigData,
    tableProps,
    dataModifier,
  );

  refetchRef.current = refetch;

  // page title
  useTitle(`IntelOwl | ${heading}`, { restoreOnUnmount: true });

  return (
    <Container fluid className="px-0">
      {/* Heading */}
      <div className="d-flex-start-center mb-2">
        <Col className="ps-0">
          <h1>
            {heading}&nbsp;
            <small className="text-muted">{data?.count || 0} total</small>
          </h1>
          <span className="text-muted">
            {description} For more info check the{" "}
            <Link
              to={`${INTELOWL_DOCS_URL}IntelOwl/usage/#plugins-framework`}
              target="_blank"
            >
              official doc.
            </Link>
          </span>
        </Col>
      </div>
      {/* Actions */}
      <div className="px-3 bg-dark d-flex justify-content-end align-items-center">
        <TableHintIcon />
        <SyncButton onClick={refetch} className="ms-auto m-0 py-1" />
      </div>
      {/* Table/Card View */}
      <div style={{ height: "70vh", overflow: "scroll" }}>{tableNode}</div>
    </Container>
  );
}

PluginWrapper.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  apiUrl: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  type: PropTypes.oneOf(Object.values(PluginsTypes)).isRequired,
};
