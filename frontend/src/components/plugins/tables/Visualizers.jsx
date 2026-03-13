import React from "react";

import { visualizerTableColumns } from "./pluginTableColumns";
import PluginWrapper from "./PluginWrapper";
import { PluginsTypes } from "../../../constants/pluginConst";
import { VISUALIZERS_CONFIG_URI } from "../../../constants/apiURLs";

export default function Visualizers() {
  console.debug("Visualizers rendered!");

  return (
    <PluginWrapper
      heading="Visualizers"
      description="Visualizers are designed to run after the analyzers and the connectors. The visualizer adds logic after the computations, allowing to show the final result in a different way than merely the list of reports."
      apiUrl={VISUALIZERS_CONFIG_URI}
      columns={visualizerTableColumns}
      type={PluginsTypes.VISUALIZER}
    />
  );
}
