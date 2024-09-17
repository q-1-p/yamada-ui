import type {
  ComponentArgs,
  OmitProps,
  StyledOptions,
  UIProps,
  WithoutAs,
} from "@yamada-ui/core"
import type { Dict, Merge } from "@yamada-ui/utils"
import type {
  DOMMotionComponents,
  Target,
  TargetAndTransition,
  Transition,
  MotionProps as OriginMotionProps,
} from "framer-motion"
import type * as React from "react"

export type {
  MotionValue,
  AbsoluteKeyframe as MotionAbsoluteKeyframe,
  AnimatePresenceProps as MotionAnimatePresenceProps,
  AnimationControls as MotionAnimationControls,
  AnimationDefinition as MotionAnimationDefinition,
  AnimationLifecycles as MotionAnimationLifecycles,
  AnimationOptionsWithValueOverrides as MotionAnimationOptionsWithValueOverrides,
  AnimationPlaybackControls as MotionAnimationPlaybackControls,
  AnimationPlaybackLifecycles as MotionAnimationPlaybackLifecycles,
  AnimationPlaybackOptions as MotionAnimationPlaybackOptions,
  AnimationProps as MotionAnimationProps,
  AnimationScope as MotionAnimationScope,
  AnimationSequence as MotionAnimationSequence,
  AnimationType as MotionAnimationType,
  At as MotionAt,
  Axis as MotionAxis,
  AxisDelta as MotionAxisDelta,
  BezierDefinition as MotionBezierDefinition,
  BoundingBox as MotionBoundingBox,
  Box as MotionBox,
  CSSStyleDeclarationWithTransform,
  CreateVisualElement as MotionCreateVisualElement,
  CustomDomComponent as MotionCustomDomComponent,
  CustomValueType as MotionCustomValueType,
  Cycle as MotionCycle,
  CycleState as MotionCycleState,
  DOMKeyframesDefinition as MotionDOMKeyframesDefinition,
  DOMMotionComponents,
  DOMSegment as MotionDOMSegment,
  DOMSegmentWithTransition as MotionDOMSegmentWithTransition,
  DecayOptions as MotionDecayOptions,
  DelayedFunction as MotionDelayedFunction,
  Delta as MotionDelta,
  DevMessage as MotionDevMessage,
  DragElastic as MotionDragElastic,
  DragHandlers as MotionDragHandlers,
  DraggableProps as MotionDraggableProps,
  DurationSpringOptions as MotionDurationSpringOptions,
  DynamicAnimationOptions as MotionDynamicAnimationOptions,
  DynamicOption as MotionDynamicOption,
  Easing as MotionEasing,
  EasingDefinition as MotionEasingDefinition,
  EasingFunction as MotionEasingFunction,
  EasingModifier as MotionEasingModifier,
  ElementOrSelector as MotionElementOrSelector,
  EventInfo as MotionEventInfo,
  FeatureBundle as MotionFeatureBundle,
  FeatureDefinition as MotionFeatureDefinition,
  FeatureDefinitions as MotionFeatureDefinitions,
  FeaturePackage as MotionFeaturePackage,
  FeaturePackages as MotionFeaturePackages,
  FocusHandlers as MotionFocusHandlers,
  HoverHandlers as MotionHoverHandlers,
  HydratedFeatureDefinition as MotionHydratedFeatureDefinition,
  HydratedFeatureDefinitions as MotionHydratedFeatureDefinitions,
  HTMLMotionProps,
  IProjectionNode as MotionIProjectionNode,
  Inertia as MotionInertia,
  InertiaOptions as MotionInertiaOptions,
  InterpolateOptions as MotionInterpolateOptions,
  KeyframeOptions as MotionKeyframeOptions,
  Keyframes as MotionKeyframes,
  KeyframesTarget as MotionKeyframesTarget,
  LayoutProps as MotionLayoutProps,
  LazyFeatureBundle as MotionLazyFeatureBundle,
  LazyProps as MotionLazyProps,
  MixerFactory as MotionMixerFactory,
  MotionAdvancedProps,
  MotionConfigProps,
  MotionStyle,
  MotionTransform,
  MotionValueSegment,
  MotionValueSegmentWithTransition,
  None as MotionNone,
  Orchestration as MotionOrchestration,
  PanHandlers as MotionPanHandlers,
  PanInfo as MotionPanInfo,
  PassiveEffect as MotionPassiveEffect,
  Point as MotionPoint,
  RelayoutInfo as MotionRelayoutInfo,
  RenderComponent as MotionRenderComponent,
  Repeat as MotionRepeat,
  RepeatType as MotionRepeatType,
  ResolveKeyframes as MotionResolveKeyframes,
  ResolveLayoutTransition as MotionResolveLayoutTransition,
  ResolvedAnimationDefinition as MotionResolvedAnimationDefinition,
  ResolvedAnimationDefinitions as MotionResolvedAnimationDefinitions,
  ResolvedKeyframesTarget as MotionResolvedKeyframesTarget,
  ResolvedSingleTarget as MotionResolvedSingleTarget,
  ResolvedValueTarget as MotionResolvedValueTarget,
  ResolvedValues as MotionResolvedValues,
  SVGAttributesAsMotionValues,
  SVGKeyframesDefinition,
  SVGMotionProps,
  SVGPathKeyframesDefinition,
  SVGPathTransitions,
  SVGTransitions,
  ScrapeMotionValuesFromProps,
  ScrollMotionValues,
  Segment as MotionSegment,
  SequenceLabel as MotionSequenceLabel,
  SequenceLabelWithTime as MotionSequenceLabelWithTime,
  SequenceMap as MotionSequenceMap,
  SequenceOptions as MotionSequenceOptions,
  SequenceTime as MotionSequenceTime,
  SingleTarget as MotionSingleTarget,
  Spring as MotionSpring,
  SpringOptions as MotionSpringOptions,
  StyleKeyframesDefinition as MotionStyleKeyframesDefinition,
  StyleTransitions as MotionStyleTransitions,
  Subscriber as MotionSubscriber,
  TapHandlers as MotionTapHandlers,
  TapInfo as MotionTapInfo,
  Target as MotionTarget,
  TargetAndTransition as MotionTargetAndTransition,
  TransformPoint as MotionTransformPoint,
  Transition as MotionTransition,
  Tween as MotionTween,
  UnresolvedValueKeyframe as MotionUnresolvedValueKeyframe,
  UseInViewOptions as MotionUseInViewOptions,
  ValueAnimationOptions as MotionValueAnimationOptions,
  ValueAnimationTransition as MotionValueAnimationTransition,
  ValueKeyframe as MotionValueKeyframe,
  ValueKeyframesDefinition as MotionValueKeyframesDefinition,
  ValueSequence as MotionValueSequence,
  ValueTarget as MotionValueTarget,
  ValueType as MotionValueType,
  VariableKeyframesDefinition as MotionVariableKeyframesDefinition,
  VariableTransitions as MotionVariableTransitions,
  Variant as MotionVariant,
  VariantLabels as MotionVariantLabels,
  Variants as MotionVariants,
  VelocityOptions as MotionVelocityOptions,
  VisualState as MotionVisualState,
} from "framer-motion"

export interface MotionFactory {
  <T extends MotionAs = MotionAs, M extends object = {}>(
    el: T,
    options?: StyledOptions,
  ): UIMotionComponent<T, M>
}

type ComponentConditionalProps<
  Y extends MotionAs,
  M extends MotionAs,
  D extends object = {},
> = Y extends M
  ? OmitProps<React.ComponentProps<Y>, D>
  :
      | OmitProps<React.ComponentProps<Y>, D>
      | OmitProps<React.ComponentProps<M>, D>

type ComponentProps<
  Y extends MotionAs,
  M extends MotionAs,
  D extends object = {},
> = ComponentConditionalProps<Y, M, D> & {
  as?: M
}

export interface MotionComponent<Y extends MotionAs, D extends object = {}>
  extends ComponentArgs {
  <M extends MotionAs = Y>(props: ComponentProps<Y, M, D>): JSX.Element
}

export type MotionAs = keyof DOMMotionComponents

export type MotionComponents = {
  [Y in MotionAs]: UIMotionComponent<Y>
}

export interface UIMotionComponent<Y extends MotionAs, M extends object = {}>
  extends MotionComponent<Y, Merge<UIMotionProps, M>> {}

interface UIMotionProps extends Merge<UIProps, OriginMotionProps> {
  as?: MotionAs
}

type FactoryAttributes<Y> =
  Y extends React.DetailedHTMLFactory<infer M, any>
    ? M
    : Y extends React.SVGFactory
      ? React.SVGAttributes<SVGElement>
      : never
type FactoryElement<Y> =
  Y extends React.DetailedHTMLFactory<any, infer M>
    ? M
    : Y extends React.SVGFactory
      ? SVGElement
      : never
type DOMAttributes<
  Y extends React.HTMLAttributes<M> | React.SVGAttributes<SVGElement>,
  M extends HTMLElement | SVGElement,
> = Y

export type MotionProps<Y extends MotionAs = "div"> = Merge<
  DOMAttributes<
    FactoryAttributes<React.ReactDOM[Y]>,
    FactoryElement<React.ReactDOM[Y]>
  >,
  UIMotionProps
>

export type MotionPropsWithoutAs<Y extends MotionAs = "div"> = WithoutAs<
  MotionProps<Y>
>

export type MotionPropsWithoutChildren<Y extends MotionAs = "div"> = Omit<
  MotionProps<Y>,
  "children"
>

type TargetResolver<Y = Dict> = (
  props: Y & MotionTransitionProps,
) => TargetAndTransition

type Variant<Y = Dict> = TargetAndTransition | TargetResolver<Y>

export interface MotionTransitionVariants<Y = Dict> {
  enter: Variant<Y>
  exit: Variant<Y>
  initial?: Variant<Y>
}

type MotionLifecycleProps<Y> = { [key in "enter" | "exit"]?: Y }

export interface MotionTransitionProps {
  /**
   * Custom `transition` definition for `enter` and `exit`.
   */
  transition?: MotionLifecycleProps<Transition>
  /**
   * Custom `transitionEnd` definition for `enter` and `exit`.
   */
  transitionEnd?: MotionLifecycleProps<Target>
  /**
   * Custom `delay` definition for `enter` and `exit`.
   */
  delay?: number | MotionLifecycleProps<number>
  /**
   * Custom `duration` definition for `enter` and `exit`.
   */
  duration?: number | MotionLifecycleProps<number>
  /**
   * Custom `enter`.
   */
  enter?: any
  /**
   * Custom `exit`.
   */
  exit?: any
  /**
   * Custom `initial`.
   */
  initial?: any
}

export type WithTransitionProps<Y extends object> = Omit<
  Y,
  "variants" | "transition"
> &
  MotionTransitionProps & {
    /**
     * If `true`, the element will unmount when `isOpen={false}` and animation is done.
     */
    unmountOnExit?: boolean
    /**
     * Show the component. triggers when enter or exit states.
     */
    isOpen?: boolean
  }
