import React from "react";

import { ingestorTableColumns } from "./pluginTableColumns";
import PluginWrapper from "./PluginWrapper";
import { PluginsTypes } from "../../../constants/pluginConst";
import { INGESTORS_CONFIG_URI } from "../../../constants/apiURLs";

export default function Ingestors() {
  console.debug("Ingestors rendered!");

  return (
    <PluginWrapper
      heading="Ingestors"
      description="Ingestors are designed to create jobs from an external source."
      apiUrl={INGESTORS_CONFIG_URI}
      columns={ingestorTableColumns}
      type={PluginsTypes.INGESTOR}
    />
  );
}
