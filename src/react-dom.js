import React from "./react";
import * as snabbdom from "snabbdom";
import propsModule from "snabbdom/modules/props";
import eventlistenersModule from "snabbdom/modules/eventlisteners";

const reconcile = snabbdom.init([propsModule, eventlistenersModule]);

let rootVNode;

const render = (el, rootDomElement) => {
  if (rootVNode == null) {
    rootVNode = rootDomElement;
  }

  rootVNode = reconcile(rootVNode, el);
};

React.__updater = (componentInstance) => {
  const oldNode = componentInstance.__vNode;
  const newNode = componentInstance.render();

  componentInstance.__vNode = reconcile(oldNode, newNode);
};

const ReactDom = {
  render,
};

export default ReactDom;
