<script setup lang="ts">

const aliasesInput = ref('');
const pasteStatus = ref('');
const isProcessing = ref(false);
const mriId = ref<string | null>(null);
const isJustCopied = ref(false);

const hasMentions = computed(() => {
  return aliasesInput.value.trim().length > 0 && mriId.value;
});

const mentionBadges = computed(() => {
  if (!aliasesInput.value.trim() || !mriId.value) {
    return [];
  }
  return aliasesInput.value.trim().split(/\s+/).filter(n => n);
});

const template = (text: string, mri: string) => {
  return '<readonly class="skipProofing" contenteditable="false" spellcheck="false" itemtype="http://schema.skype.com/Mention"><mention aria-label="' + text + '" type="person" mri="' + mri + '">' + text + '</mention></readonly>';
};

const reset = () => {
  aliasesInput.value = '';
  mriId.value = null;
  pasteStatus.value = '';
};

const copy = async () => {
  if (!aliasesInput.value.trim() || !mriId.value) {
    return;
  }

  try {
    const raw = aliasesInput.value.trim();
    const names = raw.split(/\s+/);
    let result = '';

    // Build result string (exactly like your script)
    names.forEach(name => {
      result += template(name, mriId.value!);
      result += '&nbsp;';
    });

    result = result.slice(0, -6);
    result = '<html><body>' + result + '</body></html>';

    // Write to clipboard (exactly like your script)
    const blob = new Blob([result], { type: 'text/html' });
    const data = [new ClipboardItem({ 'text/html': blob })];
    await navigator.clipboard.write(data);

    isJustCopied.value = true;
    setTimeout(() => {
      isJustCopied.value = false;
    }, 2000);

    console.log('Copied to clipboard:', result);
  } catch (error) {
    console.error('Copy failed:', error);
    throw error;
  }
};

const handlePaste = async (event: ClipboardEvent) => {
  event.preventDefault();
  isProcessing.value = true;
  pasteStatus.value = '';

  try {
    // Use clipboard read API (exactly like your script)
    const d = await navigator.clipboard.read();
    const item = d[0];

    let htmlContent = '';

    // Iterate through types to find text/html
    const types = Array.from(item.types);
    for (const type of types) {
      const data = await item.getType(type);
      if (type === 'text/html') {
        htmlContent = await data.text();
        break;
      }
    }

    if (!htmlContent) {
      pasteStatus.value = 'No HTML content found. Please use Teams "Copy mention".';
      isProcessing.value = false;
      return;
    }

    // Extract MRI using regex (exactly like your script)
    const mriMatch = /mri="(.+?)"/.exec(htmlContent);

    if (mriMatch && mriMatch[1]) {
      mriId.value = mriMatch[1];
      pasteStatus.value = '✓ MRI extracted successfully!';

      // Auto-copy if aliases already entered
      if (aliasesInput.value.trim()) {
        await copy();
      }
    } else {
      mriId.value = null;
      pasteStatus.value = 'No MRI ID found. Make sure you copied from Teams using "Copy mention".';
    }

    console.log('Pasted HTML:', htmlContent);
    console.log('Extracted MRI:', mriId.value);
  } catch (error) {
    console.error('Paste error:', error);
    pasteStatus.value = `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  } finally {
    isProcessing.value = false;
  }
};
</script>

<template>
  <div>
    <!-- Header -->
    <div class="text-center mb-4">
      <h1 class="text-3xl font-bold mb-2">Custom Team Mentions</h1>
      <p class="text-gray-600">Create custom alias mentions for Microsoft Teams</p>
    </div>

    <!-- Aliases Input -->
    <div class="mb-4">
      <div class="mb-2">Aliases</div>
      <c-input-text
        v-model:value="aliasesInput"
        placeholder="e.g., Bear Sparky Jay"
        raw-text
        clearable
        class="target"
      />
    </div>

    <!-- Teams Template Input with Paste Handler -->
    <div class="mb-4">
      <div class="mb-2">Teams mention <span v-if="isProcessing" class="text-blue-500 text-sm">(Processing...)</span></div>
      <c-input-text
        value=""
        placeholder="Paste Teams mention here (Ctrl+V)"
        raw-text
        textarea
        readonly
        class="template"
        @paste="handlePaste"
      />
      <div v-if="pasteStatus" :class="['mt-2 text-sm', mriId ? 'text-green-600' : 'text-red-500']">
        {{ pasteStatus }}
      </div>
    </div>

    <!-- MRI Display (for verification) -->
    <div v-if="mriId" class="mb-4 p-3 bg-blue-50 border border-blue-200 text-sm">
      <div class="font-semibold text-blue-800 mb-1">Extracted MRI ID:</div>
      <code class="text-xs bg-white px-2 py-1 rounded border break-all">{{ mriId }}</code>
    </div>

    <!-- Preview -->
    <div v-if="hasMentions" class="mb-4 p-4 border border-gray-200">
      <div class="mb-3 font-semibold text-gray-600">Preview:</div>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(mention, index) in mentionBadges"
          :key="index"
          class="px-4 py-2 bg-black text-white font-medium"
        >
          @{{ mention }}
        </span>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex justify-center gap-2 mb-4">
      <c-button
        :disabled="!hasMentions"
        @click="copy"
      >
        {{ isJustCopied ? '✓ Copied!' : 'Copy mentions' }}
      </c-button>
      <c-button @click="reset">
        Reset
      </c-button>
    </div>

    <!-- Instructions -->
    <div class="p-4 bg-gray-50 border border-gray-200 text-sm text-gray-600">
      <div class="font-semibold text-black mb-2">How to use:</div>
      <ol class="list-decimal pl-5 space-y-1">
        <li>Type aliases (space-separated, e.g., "Bear Sparky Jay")</li>
        <li>In Teams, right-click a person and select "Copy mention"</li>
        <li>Click the Teams mention field above and press Ctrl+V</li>
        <li>Verify MRI ID is extracted successfully</li>
        <li>Click "Copy mentions" button</li>
        <li>Paste in your Teams message</li>
      </ol>
    </div>
  </div>
</template>
