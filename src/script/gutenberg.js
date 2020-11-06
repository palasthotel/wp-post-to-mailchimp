"use strict";
import {registerPlugin} from "@wordpress/plugins";
import { PluginSidebarMoreMenuItem, PluginSidebar } from "@wordpress/edit-post";
import Plugin from "./components/Plugin";

// ---------------------------------------
// validate post date selection
// ---------------------------------------
import './auto/post-date.js'

// ---------------------------------------
// UI
// ---------------------------------------
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
                <Plugin />
            </PluginSidebar>
        </>
    }
});

