import path from "node:path";
import { pathToFileURL } from "node:url";
const root = process.cwd();
const skillDir = "C:/Users/educvv/.codex/plugins/cache/openai-primary-runtime/presentations/26.909.12148/skills/presentations";
const { finalizePresentation } = await import(pathToFileURL(path.join(skillDir, "container_tools/artifact_tool_utils.mjs")).href);
const result = await finalizePresentation({
  workspaceDir: root,
  candidatePath: path.join(root, "deck-build", "candidate.pptx"),
  finalPath: path.join(root, "output", "Deepfakes_VerificaAI_MTech2026_v2.pptx"),
  pythonExecutable: "C:/Users/educvv/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe",
  integrityValidatorPath: path.join(skillDir, "container_tools/inspect_presentation_package_integrity.py"),
  layoutValidatorPath: path.join(skillDir, "container_tools/inspect_presentation_layout_geometry.py"),
  layoutArgs: ["--expected-slide-size-emu", "12192000,6858000", "--validate-heading-fit"],
  explicitTotalSlideCount: 14,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
  fontPolicy: { basis: "design", families: ["Arial"] },
  verifyArtifactToolImport: true,
  receiptPath: path.join(root, "deck-build", "Deepfakes_VerificaAI_MTech2026_v2.validation.json"),
});
console.log(JSON.stringify(result, null, 2));
