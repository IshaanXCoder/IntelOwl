import React from "react";

import { pivotTableColumns } from "./pluginTableColumns";
import PluginWrapper from "./PluginWrapper";
import { PluginsTypes } from "../../../constants/pluginConst";
import { PIVOTS_CONFIG_URI } from "../../../constants/apiURLs";

export default function Pivots() {
  console.debug("Pivots rendered!");

  return (
    <PluginWrapper
      heading="Pivots"
      description="Pivots are designed to create a job from another job."
      apiUrl={PIVOTS_CONFIG_URI}
      columns={pivotTableColumns}
      type={PluginsTypes.PIVOT}
    />
  );
}
