import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import Axios from 'axios';
import dotenv from 'dotenv';
import { createRemoteFileNode } from 'gatsby-source-filesystem';
// import { createRemoteFileNode } from 'gatsby-transformer-json';

import storeTypes from './types/store';
import websiteTypes from './types/website';
import accountCustomFieldTypes from './types/accountCustomField';


dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const slash = require('slash');

export const createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes, createFieldExtension } = actions;

    createFieldExtension({
        name: 'fileByMerlinPath',
        extend: () => ({
            resolve: (src, args, context, info) => {
                const partialPath = src[info.fieldName];

                if (!partialPath) return null;

                if (Array.isArray(partialPath)) {
                    return partialPath.map(partialPath => {
                        const filePath = slash(path.resolve(__dirname, './src/images', partialPath));
                        const fileNode = context.nodeModel.runQuery({
                            firstOnly: true,
                            type: 'File',
                            query: {
                                filter: {
                                    absolutePath: {
                                        eq: filePath,
                                    },
                                },
                            },
                        });

                        if (!fileNode) {
                            return null;
                        }

                        return fileNode;
                    });
                }

                const filePath = slash(path.resolve(__dirname, './src/images', partialPath));
                const fileNode = context.nodeModel.runQuery({
                    firstOnly: true,
                    type: 'File',
                    query: {
                        filter: {
                            absolutePath: {
                                eq: filePath,
                            },
                        },
                    },
                });

                if (!fileNode) {
                    return null;
                }

                return fileNode;
            },
        }),
    });

    createTypes(
        `
        type ProjectsJson implements Node {
            title: String
            date: String
            length: String
            company: String
            url: String
            text: String
            images: [File] @fileByMerlinPath
        }
        `
    )
};

exports.onCreateWebpackConfig = ({ stage, actions, plugins, getConfig }) => {
    if (stage === 'build-javascript') {
        const config = getConfig();
        const miniCssExtractPlugin = config.plugins.find(
            plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
        );
        if (miniCssExtractPlugin) {
            miniCssExtractPlugin.options.ignoreOrder = true;
        }
        actions.replaceWebpackConfig(config);
    }
};
