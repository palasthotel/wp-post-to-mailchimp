"use strict";
import {registerPlugin} from "@wordpress/plugins";
import { PluginSidebarMoreMenuItem, PluginSidebar } from "@wordpress/edit-post";
import apiFetch from '@wordpress/api-fetch';
import {select} from '@wordpress/data';
import Plugin from "./components/Plugin";
import { PanelBody } from "@wordpress/components";

(()=>{

    const PLUGIN_NAME = "post-to-mailchimp"

    registerPlugin(PLUGIN_NAME, {
        render: ()=>{
            return <>
                <PluginSidebarMoreMenuItem
                    target={PLUGIN_NAME}
                    icon="email"
                >
                    Post to Mailchimp
                </PluginSidebarMoreMenuItem>
                <PluginSidebar
                    name={PLUGIN_NAME}
                    icon="email"
                    title="Post to Mailchimp"
                >
                    <PanelBody
                        title="Step 1: Create campaign"
                        initialOpen={true}
                    >
                        <p>Create Campaign</p>
                    </PanelBody>
                    <PanelBody
                        title="Step 2: Test contents"
                        initialOpen={false}
                    >
                        <p>update and preview contents and send test mails</p>
                    </PanelBody>
                    <PanelBody
                        title="Step 3: Schedule"
                        initialOpen={false}
                    >
                        <p>send right now or schedule</p>
                    </PanelBody>

                    <Plugin />
                </PluginSidebar>
            </>
        }
    });


})();
