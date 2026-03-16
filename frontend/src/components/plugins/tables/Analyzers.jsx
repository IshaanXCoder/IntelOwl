import React from "react";

import { analyzersTableColumns } from "./pluginTableColumns";
import PluginWrapper from "./PluginWrapper";
import { PluginsTypes } from "../../../constants/pluginConst";
import { ANALYZERS_CONFIG_URI } from "../../../constants/apiURLs";

export default function Analyzers() {
  console.debug("Analyzers rendered!");

  return (
    <PluginWrapper
      heading="Analyzers"
      description="Analyzers are the most important plugins in IntelOwl. They allow to perform data extraction on the observables and/or files that you would like to analyze."
      apiUrl={ANALYZERS_CONFIG_URI}
      columns={analyzersTableColumns}
      type={PluginsTypes.ANALYZER}
    />
  );
}
