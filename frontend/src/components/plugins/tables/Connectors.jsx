import React from "react";

import { connectorTableColumns } from "./pluginTableColumns";
import PluginWrapper from "./PluginWrapper";
import { PluginsTypes } from "../../../constants/pluginConst";
import { CONNECTORS_CONFIG_URI } from "../../../constants/apiURLs";

export default function Connectors() {
  console.debug("Connectors rendered!");

  return (
    <PluginWrapper
      heading="Connectors"
      description="Connectors are designed to run after every successful analysis which makes them suitable for automated threat-sharing. They support integration with other SIEM/SOAR projects, specifically aimed at Threat Sharing Platforms."
      apiUrl={CONNECTORS_CONFIG_URI}
      columns={connectorTableColumns}
      type={PluginsTypes.CONNECTOR}
    />
  );
}
